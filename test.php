<?php
  $host     : 'http://ip0131.cafe24.com/';
  $user = 'ip0131';
    $pw = 'ip0131132';
    $dbName = 'ip0131';
    
    $conn = mysqli_connect($host, $user, $pw, $dbName);
        
    $sql = "SELECT * FROM g5_member";
    $result = mysqli_query($conn, $sql);    
    $row = mysqli_fetch_array($result);

    $list_array = array("name" =>$row['mb_nick'],
                        "email" =>$row['mb_email'],
                        "phone" => $row['mb_id']);

    $result_array = json_encode($list_array);
    
    echo $result_array;
    
?>