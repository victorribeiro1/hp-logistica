<?php
    //Import PHPMailer classes into the global namespace
    //These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    //Load Composer's autoloader
    require 'vendor/autoload.php';

    if (isset($_POST["enviar"])) {
        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
        //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'br556.hostgator.com.br';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'contato@hplogistica.com';                     //SMTP username
            $mail->Password   = 'Hp17042611*';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('contato@hplogistica.com', 'Mailer');
            $mail->addAddress('contato@hplogistica.com', 'Joe User');     //Add a recipient
            $mail->addReplyTo('contato@hplogistica.com', 'Information');

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Mensagem via site';
            $body = "Mensagem enviada através do site, segue informações abaixo:<br />
            Nome: ". $_POST['nome']. "<br />
            Email: ". $_POST['email']. "<br />
            Cargo: ". $_POST['posicao']. "<br />
            Empresa: ". $_POST['cargo']. "<br />
            Mensagem: ". $_POST['mensagem']. "<br />
            ";

            $mail->Body = $body;

            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Erro ao enviar e-mail, acesso não foi via formulário";
    }