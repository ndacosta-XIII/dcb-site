$listener = New-Object System.Net.HttpListener
$port = if($env:PORT){$env:PORT}else{'3334'}
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Server started on http://localhost:$port"
while($listener.IsListening){
  $ctx = $listener.GetContext()
  $req = $ctx.Request
  $res = $ctx.Response
  $path = $req.Url.LocalPath
  if($path -eq '/') { $path = '/index.html' }
  $file = $PSScriptRoot + $path.Replace('/', '\')
  if(Test-Path $file){
    $bytes = [System.IO.File]::ReadAllBytes($file)
    $ext = [System.IO.Path]::GetExtension($file)
    $mime = if($ext -eq '.html'){'text/html; charset=utf-8'}elseif($ext -eq '.css'){'text/css'}elseif($ext -eq '.js'){'application/javascript'}else{'application/octet-stream'}
    $res.ContentType = $mime
    $res.ContentLength64 = $bytes.Length
    $res.OutputStream.Write($bytes,0,$bytes.Length)
  }
  $res.OutputStream.Close()
}
