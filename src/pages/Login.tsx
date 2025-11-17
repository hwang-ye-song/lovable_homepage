import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/5">
        <Card className="w-full max-w-md animate-fade-in animate-scale-in">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="font-heading text-2xl">환영합니다</CardTitle>
            <CardDescription>아카데미 계정으로 로그인하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="student@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span>로그인 상태 유지</span>
                </label>
                <a href="#" className="text-primary hover:underline">비밀번호를 잊으셨나요?</a>
              </div>
            </div>

            <Button className="w-full hover-scale" size="lg">로그인</Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">또는 다음으로 계속</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="hover-scale">Google</Button>
              <Button variant="outline" className="hover-scale">GitHub</Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              계정이 없으신가요?{" "}
              <Link to="/" className="text-primary hover:underline font-medium">회원가입</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
