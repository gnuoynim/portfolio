import Link from "next/link";

const PublishingComponent = () => {
  return (
    <div className="publishing" id="publishing">
      <p className="title">Publishing</p>
      <p className="subTitle">다양한 언어를 활용한 포트폴리오 작업물</p>
      <ul>
        <li>
          <div>
            <span className="num">1</span>
            <span>adidas</span>
            <p>
              아디다스 브랜드를 고해상도 이미지와 스크롤을 이용한 키프레임과
              요소 컨트롤해 인터랙티브한 웹사이트를 구현했습니다.
            </p>
          </div>
          <Link
            href="Project/interactive_web/index.html"
            target="_blank"
            className="svgButton"
          >
            <span>Click me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </li>
        <li>
          <div>
            <span className="num">2</span>
            <span>Starbucks</span>
            <p>
              스타벅스 브랜드를 클론코딩을 통해 실제 서비스화 가능한 수준까지
              프로젝트를 완성하였습니다.
            </p>
          </div>
          <Link
            href="Project/work2/starbucks/index.html"
            target="_blank"
            className="svgButton"
          >
            <span>Click me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </li>
        <li>
          <div>
            <span className="num">3</span>
            <span>LotteWorld</span>
            <p>
              롯데월드 클론코딩을 통해 반응형 웹사이트를 구현해 다양한
              프로젝트를 완성하였습니다.
            </p>
          </div>
          <Link
            href="Project/work2/lotteworld/main/index.html"
            target="_blank"
            className="svgButton"
          >
            <span>Click me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </li>
        <li>
          <div>
            <span className="num">4</span>
            <span>행복은간장밥</span>
            <p>
              실제 사이트의 리뉴얼을 위해 디자인 및 코딩하고, 메인 페이지
              이외에도 회원가입과 로그인 페이지를 기획, 디자인, 코딩하여
              완성하였습니다.
            </p>
          </div>
          <Link
            href="Project/work2/heng/index.html"
            target="_blank"
            className="svgButton"
          >
            <span>Click me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </li>
        <li>
          <div>
            <span className="num">5</span>
            <span>하루야채</span>
            <p>실제 사이트의 리뉴얼을 위해 기획, 디자인, 코딩하였습니다.</p>
          </div>
          <Link
            href="Project/work2/vegetable/index.html"
            target="_blank"
            className="svgButton"
          >
            <span>Click me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </li>
        <li>
          <div>
            <span className="num">6</span>
            <span>통도환타지아</span>
            <p> 실제 사이트의 리뉴얼을 위해 기획, 디자인, 코딩하였습니다.</p>
          </div>
          <Link
            href="Project/work1/tongdo/main/index.html"
            target="_blank"
            className="svgButton"
          >
            <span>Click me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PublishingComponent;
