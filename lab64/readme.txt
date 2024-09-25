Testar a página inicial:
curl http://localhost:3000 

Testar a página sobre:
curl http://localhost:3000/about

Erro 404:
curl http://localhost:3000/404 

Upload de arquivo:
curl -X POST -F "file=@C:\Users\felip\OneDrive\Documentos\GitHub\Desenvolvimento-Web\lab64\readme.txt" http://localhost:3000/upload
