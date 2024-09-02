<?php
$score = 0;
$totalQuestions = 0;
$percentage = 0;


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['questions']) && isset($_POST['answers'])) {
        $questions = $_POST['questions'];
        $answers = $_POST['answers'];

        $totalQuestions = count($questions);
        $score = 0;

        foreach ($questions as $question_id => $correct_answer) {
            if (isset($answers[$question_id]) && strtolower(trim($answers[$question_id])) == strtolower(trim($correct_answer))) {
                $score++;
            }
        }

        $percentage = ($score / $totalQuestions) * 100;
    } else {
        echo "Error: Quiz data is missing.";
        exit();
    }
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
    <title>Quiz Results</title>
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
            <div class="score-list">
                <h2>Your Score</h2>
                <p>You answered correctly <?php echo $score; ?> out of <?php echo $totalQuestions; ?> questions.</p>
                <p>Your score is <?php echo $percentage; ?>%.</p>

                <a href="quiz-list.php">Back to Quiz List</a>
            </div>
        </div>
    </div>
</body>

</html>
