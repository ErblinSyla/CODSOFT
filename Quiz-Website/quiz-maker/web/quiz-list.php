<?php
include 'db.php';



$sql = "SELECT id, title FROM quizzes";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz List</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery-3.7.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <link rel="stylesheet" href="style.css">
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
                    <h2>Available Quizzes</h2>
                </div>
                <?php
    if ($result->num_rows > 0) {
        echo '<div class="quizes">';
        while($row = $result->fetch_assoc()) {
            echo '<div><a href="quiz.php?id=' . $row["id"] . '">' . htmlspecialchars($row["title"]) . '</a></div>';
        }
        echo '</div>';
    } else {
        echo "<p>No quizzes available.</p>";
    }

    $conn->close();
    ?>
            </div>
        </div>
    </div>

</body>

</html>
