import Link from "next/link";

const ProjectComponent = () => {
  return (
    <div className="develop" id="develop">
      <p className="title">Develop</p>
      <p className="subTitle">사이트, gitHub을 바로 확인하실수있습니다.</p>
      <div className="project">
        <div>
          <span className="num">1</span>
          <Link href="https://kimminyoung-naming.cozyfex.com/" target="_blank">
            <p>NamingConvention</p>
          </Link>
          <Link
            href="https://github.com/gnuoynim/NamingConvention"
            target="_blank"
          >
            gitHub 주소 바로가기
          </Link>
        </div>
        <div>
          <span className="num">2</span>
          <Link
            href="https://kimminyoung-board-react.cozyfex.com/"
            target="_blank"
          >
            <p>Board react</p>
          </Link>
          <Link href="https://github.com/gnuoynim/React-board" target="_blank">
            gitHub 주소 바로가기
          </Link>
        </div>
        <div>
          <span className="num">3</span>
          <Link
            href="https://kimminyoung-board-js.cozyfex.com/"
            target="_blank"
          >
            <p>Board.js</p>
          </Link>
          <Link href="https://github.com/gnuoynim/Board-js" target="_blank">
            gitHub 주소 바로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
