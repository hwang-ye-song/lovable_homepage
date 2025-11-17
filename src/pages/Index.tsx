import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CurriculumCard } from "@/components/CurriculumCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { FacultyCard } from "@/components/FacultyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Brain, Lightbulb, ArrowRight, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full animate-fade-in">
            <span className="text-accent font-medium text-sm">차세대 학습</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            AI & 로봇공학 아카데미
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            실습 중심의 AI와 로봇공학 교육을 통해 청소년들이 내일의 혁신가가 되도록 지원합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="group hover-scale">
              시작하기
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/curriculum/basic">
              <Button size="lg" variant="outline" className="hover-scale">
                커리큘럼 탐색
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold mb-4">학습 로드맵</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              기초부터 고급 로봇공학까지 체계적인 학습 경로를 따라가세요
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex-1 text-center animate-fade-in hover-scale">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">1. 기초 트랙</h3>
              <p className="text-sm text-muted-foreground">AI 개념의 기초</p>
            </div>
            
            <ArrowRight className="hidden md:block h-8 w-8 text-accent animate-pulse" />
            
            <div className="flex-1 text-center animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">2. 응용 트랙</h3>
              <p className="text-sm text-muted-foreground">실제 문제에 AI 적용</p>
            </div>
            
            <ArrowRight className="hidden md:block h-8 w-8 text-accent animate-pulse" />
            
            <div className="flex-1 text-center animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">3. 로봇 트랙</h3>
              <p className="text-sm text-muted-foreground">지능형 로봇 제작</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold mb-4">커리큘럼</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              여러분의 경로를 선택하고 AI와 로봇공학으로 만들기를 시작하세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in hover-scale">
              <CurriculumCard
                id="basic"
                title="AI 기초 트랙"
                description="AI와 머신러닝의 기초를 배우세요"
                level="초급"
                duration="12주"
                icon={<Lightbulb className="h-6 w-6" />}
              />
            </div>
            <div className="animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <CurriculumCard
                id="application"
                title="AI 응용 트랙"
                description="AI 기술을 실제 문제 해결에 적용하세요"
                level="중급"
                duration="16주"
                icon={<Brain className="h-6 w-6" />}
              />
            </div>
            <div className="animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <CurriculumCard
                id="robot"
                title="로봇공학 트랙"
                description="지능형 로봇을 만들고 프로그래밍하세요"
                level="고급"
                duration="20주"
                icon={<Bot className="h-6 w-6" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold mb-4">학생 프로젝트</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              우리 학생들의 놀라운 작품들을 확인하세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="animate-fade-in hover-scale">
              <PortfolioCard
                title="스마트 홈 도우미"
                student="김민준"
                description="음성으로 제어되는 홈 자동화 시스템"
                category="AI"
                image="🏠"
              />
            </div>
            <div className="animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <PortfolioCard
                title="자율 주행 자동차"
                student="이서연"
                description="컴퓨터 비전을 활용한 미니 자율주행차"
                category="로봇"
                image="🚗"
              />
            </div>
            <div className="animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <PortfolioCard
                title="감정 분석 챗봇"
                student="박지우"
                description="사용자 감정을 이해하는 AI 챗봇"
                category="NLP"
                image="💬"
              />
            </div>
          </div>
          
          <div className="text-center animate-fade-in">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="hover-scale">
                모든 프로젝트 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Faculty Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold mb-4">교수진 소개</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              업계 전문가들과 경험 많은 교육자들로부터 배우세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="animate-fade-in hover-scale">
              <FacultyCard
                name="박지훈 박사"
                title="AI 프로그램 책임자"
                expertise={["머신러닝", "딥러닝", "컴퓨터 비전"]}
                bio="AI 연구 및 교육 분야 15년 경력"
                email="j.park@academy.ai"
              />
            </div>
            <div className="animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <FacultyCard
                name="마리아 가르시아 교수"
                title="로봇공학 책임자"
                expertise={["로봇공학", "임베디드 시스템", "제어 이론"]}
                bio="자율 시스템 전문 전직 NASA 로봇공학 엔지니어"
                email="m.garcia@academy.ai"
              />
            </div>
            <div className="animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <FacultyCard
                name="리사 웡 박사"
                title="NLP 전문가"
                expertise={["자연어 처리", "AI 윤리", "데이터 과학"]}
                bio="자연어 처리 분야 연구 논문 발표"
                email="l.wong@academy.ai"
              />
            </div>
          </div>
          
          <div className="text-center animate-fade-in">
            <Link to="/faculty">
              <Button variant="outline" size="lg" className="hover-scale">
                전체 교수진 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-lg p-12 text-center animate-fade-in hover-scale">
            <h2 className="font-heading text-4xl font-bold mb-4">학습 여정을 시작할 준비가 되셨나요?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              AI와 로봇공학을 배우는 수백 명의 학생들과 함께하세요. 얼리버드 할인 제공!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="이메일을 입력하세요" className="flex-1" />
              <Button size="lg" className="hover-scale">
                시작하기
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              신용카드 불필요. 14일 무료 체험.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
