<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>jar</title>
    </head>
    <body>
        <div id="container">
            <h1>Message</h1>
            <form action="enter_message.php" method="post">
                <label for="text">Message</label>
                <textarea name="text" id="text"></textarea>
                <label for="text">Date</label>
                <textarea name="text" id="date"></textarea>
                <button type="submit">enter</button>
            </form>
            <?php
            require_once 'connect.php';
            $sql = "SELECT * FROM jars";
            $result = mysqli_query($link, $sql) or die(mysqli_error($link));
            ?>
        </div>
    </body>
</html>