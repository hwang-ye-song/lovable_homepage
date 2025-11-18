# 로컬 개발 환경 설정 가이드

## 필수 요구사항

- Node.js (v18 이상 권장)
- npm 또는 yarn 또는 bun

## 설치 및 실행 방법

### 1. 의존성 설치

```bash
npm install
```

또는

```bash
bun install
```

### 2. 환경 변수 설정

`.env` 파일을 열고 Supabase 프로젝트 정보를 입력하세요:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

**Supabase 프로젝트 URL과 API 키 찾는 방법:**
1. [Supabase Dashboard](https://app.supabase.com)에 로그인
2. 프로젝트 선택
3. Settings > API 메뉴로 이동
4. Project URL과 anon/public key를 복사하여 `.env` 파일에 입력

### 3. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:8080`으로 접속할 수 있습니다.

### 4. 빌드

프로덕션 빌드를 생성하려면:

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 5. 빌드 미리보기

빌드된 결과물을 미리보려면:

```bash
npm run preview
```

## 트러블슈팅

### 포트가 이미 사용 중인 경우

`vite.config.ts`에서 포트 번호를 변경할 수 있습니다:

```typescript
server: {
  host: "::",
  port: 3000, // 원하는 포트 번호로 변경
}
```

### 환경 변수가 적용되지 않는 경우

- `.env` 파일이 프로젝트 루트에 있는지 확인
- 개발 서버를 재시작해보세요
- Vite는 `VITE_` 접두사가 있는 환경 변수만 사용합니다

### Supabase 연결 오류

- `.env` 파일의 URL과 키가 올바른지 확인
- Supabase 프로젝트의 RLS (Row Level Security) 정책 확인
- 브라우저 콘솔에서 오류 메시지 확인

