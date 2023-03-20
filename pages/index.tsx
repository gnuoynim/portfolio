import BaseLayout from "@/layout/base-layout";
import NavigationBarComponent from "@/component/navigation-bar-component";
import MainVisualComponent from "@/component/main-visual-component";
import ProjectComponent from "@/component/project-component";
import SkillsComponent from "@/component/skills-component";
import PublishingComponent from "@/component/publishing-component";
import ContactComponent from "@/component/contact-component";
const Index = () => {
  return (
    <BaseLayout>
       <NavigationBarComponent />
      <MainVisualComponent />
      <ProjectComponent />
      <SkillsComponent />
      <PublishingComponent />
      <ContactComponent />
    </BaseLayout>
  );
};

export default Index;
