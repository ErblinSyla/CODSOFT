<?php
session_start();
include 'db.php';

$error_message = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, password_hash FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($user_id, $password_hash);
        $stmt->fetch();

        if (password_verify($password, $password_hash)) {
            $_SESSION['user_id'] = $user_id;
            header('Location: quiz-list.php');
            exit();
        } else {
            $error_message = "Invalid username or password.";
        }
    } else {
        $error_message = "Invalid username or password.";
    }

    $stmt->close();
    $conn->close();
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
    <title>Login</title>
</head>

<body>
    <div class="login-div">
        <div class="login-form">
            <div class="login-header">
                <h1>Log In</h1>
            </div>
            <div class="form">
                <?php if (!empty($error_message)): ?>
                <div class="alert alert-danger" role="alert">
                    <p><?php echo $error_message; ?></p>
                </div>
                <?php endif; ?>
                <form method="POST" action="login.php">
                    <h3>Username:</h3>
                    <input placeholder="Enter your username" class="input" type="text" id="username" name="username" required>
                    <h3>Password:</h3>
                    <input placeholder="Enter your password" class="input" type="password" id="password" name="password" required>
                    <br>
                    <button class="btn login-btn" type="submit">Login</button>
                </form>
                <p class="login-text">Don't have an account? <a href="register.php">Register here</a></p>
            </div>
        </div>
    </div>

</body>

</html>
