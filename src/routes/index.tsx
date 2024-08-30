import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landingpage/index";
import { LoginPage } from "../pages/login/index";
import { RegisterPage } from "../pages/register/index";
import { MyClassesPage } from "../pages/my-classes/index";
import { ProfilePage } from "../pages/profile/index";
import { RenderClassPage } from "../pages/renderClassPage/index";
import { TeachingPlanModal1 } from "../modals/teachingPlan/page1";
import { TeachingPlanModal2 } from "../modals/teachingPlan/page2";
import { TeachingPlanModal3 } from "../modals/teachingPlan/page3";
import { SelectContextPage } from "../modals/teachingPlan/selectContextPage";
import { EditProfileModal } from "../modals/profile";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/class" element={<MyClassesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/editProfile" element={<EditProfileModal />} />
      <Route path="/renderClass" element={<RenderClassPage />} />
      <Route path="/planModal1" element={<TeachingPlanModal1 />} />
      <Route path="/planModal2" element={<TeachingPlanModal2 />} />
      <Route path="/planModal3" element={<TeachingPlanModal3 />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/addContext" element={<SelectContextPage />} />
    </Routes>
  );
};
