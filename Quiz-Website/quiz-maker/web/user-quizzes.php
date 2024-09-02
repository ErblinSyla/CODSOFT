<?php
session_start();
include 'db.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}

$user_id = $_SESSION['user_id'];

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_quiz_id'])) {
    $delete_quiz_id = $_POST['delete_quiz_id'];

    $delete_sql = "DELETE FROM quizzes WHERE id = ? AND user_id = ?";
    $delete_stmt = $conn->prepare($delete_sql);
    $delete_stmt->bind_param("ii", $delete_quiz_id, $user_id);
    $delete_stmt->execute();

    header("Location: user-quizzes.php");
    exit();
}

$sql = "SELECT id, title FROM quizzes WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery-3.7.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Your Quizzes</title>
</head>

<body>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <a class="navbar-brand" href="logout.php">Log Out</a>
            <a class="nav-link" aria-current="page" href="quiz-list.php">Quiz List</a>
            <a class="nav-link" href="user-quizzes.php">Your Quizzes</a>
            <a class="nav-link" href="quiz-builder.php">Build Quiz</a>
        </nav>
        <div class="quiz-div">
            <div class="quiz-list">
                <div class="quiz-header">
                    <h2>Your Quizzes</h2>
                </div>
                <?php
            if ($result->num_rows > 0) {
                echo '<div class="quizes">';
                while ($row = $result->fetch_assoc()) {
                    echo '<div class="quiz-item">';
                    echo '<a href="quiz.php?id=' . $row["id"] . '">' . htmlspecialchars($row["title"]) . '</a>';
                    echo '<form method="POST" action="user-quizzes.php" class="delete-form">';
                    echo '<input type="hidden" name="delete_quiz_id" value="' . $row["id"] . '">';
                    echo '<button type="submit" class=" btn-danger btn-sm">Delete Quiz</button>';
                    echo '</form>';
                    echo '</div>';
                }
                echo '</div>';
            } else {
                echo '<p class="noquiz-text">You have not created any quizzes yet.</p>';
            }

            $conn->close();
            ?>
            </div>
        </div>
    </div>
</body>

</html>
