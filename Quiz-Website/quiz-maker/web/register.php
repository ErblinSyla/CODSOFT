<?php
include 'db.php';

$error_message = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $error_message = "Username is already taken. Please choose another one.";
    } else {
        $password_hash = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $conn->prepare("INSERT INTO users (username, password_hash) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $password_hash);

        if ($stmt->execute()) {
            $stmt->close();
            $conn->close();
            header('Location: login.php');
            exit;
        } else {
            $error_message = "Error: " . $stmt->error;
        }
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
    <title>Register</title>
</head>

<body>
    <div class="register-div">
        <div class="register-form">
            <div class="register-header">
                <h1>Register</h1>
            </div>
            <div class="form">
                <?php if (!empty($error_message)) : ?>
                    <div class="alert alert-danger"><?php echo $error_message; ?></div>
                <?php endif; ?>
                <form method="POST" action="register.php">
                    <h3>Username:</h3>
                    <input placeholder="Enter your username" type="text" id="username" name="username" required>
                    <br>
                    <h3>Password:</h3>
                    <input placeholder="Enter your password" type="password" id="password" name="password" required>
                    <br>
                    <button class="btn register-btn" type="submit">Register</button>
                </form>
                <p class="register-text">Already registered? <a href="login.php">Log In here</a></p>
            </div>
        </div>
    </div>

</body>

</html>
