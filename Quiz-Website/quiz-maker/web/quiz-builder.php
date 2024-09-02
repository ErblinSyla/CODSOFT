<?php
session_start();
include 'db.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['quiz-title'];
    $questions = $_POST['questions'];
    $answers = $_POST['answers'];
    $user_id = $_SESSION['user_id'];

    $stmt = $conn->prepare("INSERT INTO quizzes (title, user_id) VALUES (?, ?)");
    $stmt->bind_param('si', $title, $user_id);
    $stmt->execute();
    $quiz_id = $stmt->insert_id;
    $stmt->close();

    $stmt = $conn->prepare("INSERT INTO questions (quiz_id, question_text, answer_text) VALUES (?, ?, ?)");
    foreach ($questions as $index => $question) {
        $answer = $answers[$index];
        $stmt->bind_param('iss', $quiz_id, $question, $answer);
        $stmt->execute();
    }
    $stmt->close();
    $conn->close();

    header('Location: user-quizzes.php');
    exit();
}
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
    <title>Quiz Builder</title>
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
                    <h2>Create a Quiz</h2>
                </div>
                <div class="quiz-build">
                    <form method="POST" action="quiz-builder.php">
                        <h3>Quiz Title:</h3>
                        <input type="text" id="quiz-title" name="quiz-title" required><br>

                        <div id="questions-container">
                            <div>
                                <h5>Question 1:</h5>
                                <input type="text" name="questions[]" required><br>
                                <h5>Answer:</h5>
                                <input type="text" name="answers[]" required><br><br>
                            </div>
                        </div>

                        <button class="btn save-btn" type="button" onclick="addQuestion()">Add Question</button><br>
                        <button class="btn save-btn" type="submit">Save Quiz</button>
                    </form>
                </div>
            </div>
        </div>
    </div>



    <script>
        let questionCount = 1;

        function addQuestion() {
            questionCount++;
            const container = document.getElementById('questions-container');

            const questionDiv = document.createElement('div');
            questionDiv.innerHTML = `
                <label>Question ${questionCount}:</label>
                <input type="text" name="questions[]" required><br>
                <label>Answer:</label>
                <input type="text" name="answers[]" required><br><br>
            `;
            container.appendChild(questionDiv);
        }

    </script>
</body>

</html>
