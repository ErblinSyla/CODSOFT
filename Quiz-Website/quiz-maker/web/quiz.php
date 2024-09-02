<?php
include 'db.php';

if (isset($_GET['id'])) {
    $quiz_id = intval($_GET['id']);

    $stmt = $conn->prepare("SELECT title FROM quizzes WHERE id = ?");
    $stmt->bind_param("i", $quiz_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $quiz = $result->fetch_assoc();
    $stmt->close();

    $stmt = $conn->prepare("SELECT id, question_text, answer_text FROM questions WHERE quiz_id = ?");
    $stmt->bind_param("i", $quiz_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $questions = $result->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
} else {
    die("Quiz not found.");
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($quiz['title']); ?></title>
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
                    <h2><?php echo htmlspecialchars($quiz['title']); ?></h2>
                </div>
                <div class="quiz-build">
                    <form method="POST" action="score.php">
                        <?php
        foreach ($questions as $index => $question) {
            echo "<div>";
            echo "<h5><strong>Question " . ($index + 1) . ":</strong> " . htmlspecialchars($question['question_text']) . "</h5>";
            echo "<input type='hidden' name='questions[" . $question['id'] . "]' value='" . htmlspecialchars($question['answer_text']) . "'>";
            echo "<input type='text' name='answers[" . $question['id'] . "]' placeholder='Your answer'>";
            echo "</div>";
        }
        ?>
                        <button class="btn submit-btn" type="submit">Submit Quiz</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
