import Image from "next/image";

const SkillsComponent = () => {
  return (
    <div className="skills" id="skills">
      <p>Skills</p>
      <ul>
        <li>
          <Image
            src="/images/html5.svg"
            alt="Html로고"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image src="/images/css3.svg" alt="css3로고" width="50" height="50" />
        </li>
        <li>
          <Image
            src="/images/sass.svg"
            alt="sass 로고"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image
            src="/images/javascript.svg"
            alt="javascript 로고"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image
            src="/images/jquery.svg"
            alt="jquery 로고"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image
            src="/images/typescript.svg"
            alt="typescript 로고"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image
            src="/images/react.svg"
            alt="react 로고"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image
            src="/images/nextdotjs.svg"
            alt="reanextdot 로고"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image
            src="/images/bootstrap.svg"
            alt="bootstrap 로고"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image
            src="/images/github.svg"
            alt="github 로고"
            width="50"
            height="50"
          />
        </li>
      </ul>
    </div>
  );
};

export default SkillsComponent;
