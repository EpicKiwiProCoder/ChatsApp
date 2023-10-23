@ECHO OFF
npm run build && firebase deploy --only hosting:chatsapp-web
ECHO "Done"