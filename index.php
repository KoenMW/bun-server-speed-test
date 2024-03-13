<?php
$server = $_SERVER['REQUEST_METHOD'];

switch ($server) {
    case 'GET':
        $files = glob('php/*');
        $length = count($files);
        // delete all files in the seeds directory
        foreach ($files as $file) {
            if (is_file($file))
                unlink($file);
        }
        echo "Deleted $length files";
        break;
    case 'POST':
        $filename = 'php/' . mt_rand();
        file_put_contents($filename, '');
        echo "Seed created";
        break;
    default:
        http_response_code(405);
        echo "Method not allowed";
        break;
}
