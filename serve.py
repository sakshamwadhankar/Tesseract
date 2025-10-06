#!/usr/bin/env python3
import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 3000
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def do_GET(self):
        # Redirect root to working-index.html
        if self.path == '/':
            self.send_response(302)
            self.send_header('Location', '/working-index.html')
            self.end_headers()
            return
        super().do_GET()

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Tesseract 2025 server running on http://localhost:{PORT}")
        print(f"📁 Serving directory: {DIRECTORY}")
        print(f"🗳️ Try accessing: http://localhost:{PORT}/tessellation-vote-portal/")
        print(f"🔐 Login portal: http://localhost:{PORT}/shield-tesseract-access-portal/")
        print(f"⚡ Admin console: http://localhost:{PORT}/furys-war-room-console/")
        print(f"🏆 Leaderboard: http://localhost:{PORT}/tesseract-hall-of-heroes/")
        print(f"👤 User dashboard: http://localhost:{PORT}/marvel-tesseract-dashboard/")
        print("\nPress Ctrl+C to stop the server")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped")
