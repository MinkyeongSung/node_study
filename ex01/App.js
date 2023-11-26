/*
    -디렉토리 : /nods25/004/App.js
    - 주요 내용 : 라우팅 처리
                 HTML 템플릿을 별도 파일로 분리
                 fs 파일시스템 사용하여 각각의 HTML 내용을 읽어서 템플릿 적용
*/
const http = require('http');
const url = require('url');
const fs = require('fs');

// Template HTML
const templateHtml = () => {


}

// 서버 생성
const app = http.createServer((req, res) => {

    // [1] 클라이언트 요청 URL 획득
    const clientUrl = req.url;
    console.log('클라이언트 URL => ' + clientUrl);

    // [2] 파비콘 요청에 대한 처리
    if (clientUrl === '/favicon.ico') {
        res.writeHead(404);
        res.end('Not found');
        return;
    }

    // [3] 파싱 : 클라이언트 주소에서 필요한 것만 뽑아내기
    const addr = clientUrl;
    const clientQuery = url.parse(addr, true).query;
    const clientPathname = url.parse(addr, true).pathname;

    // [4] 패스네임에서 슬래시 제외
    if (clientPathname === '/') {
        txtFileName = 'main'
    }
    else {
        txtFileName = clientPathname.replace("/", "");
    }

    console.log('txtFileName:' + txtFileName);



});

// 클라이언트 요청 수신 대기
app.listen(3000, () => {
    console.log('Server Running at 3000 Port ~~~')
})