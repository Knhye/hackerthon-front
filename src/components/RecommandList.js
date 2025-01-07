import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex; /* Use flexbox for layout */
  width: 100%;
  font-family: "GowunBatang-Regular";
`;

const RecommandListContainer = styled.div`
  flex: 1; /* Take up remaining space */
  height: auto;
  display: flex;
  flex-direction: column; /* Stack items vertically */
  padding: 30px; /* Add some padding */
`;

const BlogSidebar = styled.div`
  width: 300px; /* Fixed width for the sidebar */
  padding: 20px; /* Padding inside the sidebar */
  border-left: 1px solid #ccc; /* Border to separate from the main content */
  background-color: rgba(195, 199, 255, 0.38);
  border-radius: 5px; /* Rounded corners */
`;

const BlogTitle = styled.h3`
  font-size: 20px; /* Font size for the blog title */
`;

const BlogContent = styled.p`
  font-size: 16px; /* Font size for the blog content */
`;

const BlogLink = styled.a`
  display: block; /* Make link block-level */
  margin-top: 10px; /* Space above the link */
  color: #007bff; /* Link color */
  text-decoration: none; /* Remove underline */

  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const DiseaseItem = styled.div`
  margin-bottom: 20px; /* Space between items */
  border: 1px solid rgb(180, 185, 255); /* Border for each disease item */
  border-radius: 5px; /* Rounded corners */
  padding: 30px; /* Inner padding */
`;

const DiseaseName = styled.h2`
  font-size: 24px; /* Larger font for disease name */
`;

const DiseaseExplanation = styled.p`
  font-size: 16px; /* Standard font size for explanation */
`;

const DiseaseCare = styled.p`
  font-size: 16px; /* Standard font size for care method */
  font-weight: bold; /* Bold text for emphasis */
`;

const diseases = [
  {
    name: "양극성 장애 (Bipolar Disorder)",
    explanation1:
      "조증 상태에서 과도한 자신감과 에너지를 느끼며, 잠을 줄여도 피로감을 느끼지 않음.",
    explanation2:
      "우울 상태에서는 슬픔이 지속되고, 이유 없이 눈물이 나며, 무기력감과 식욕 변화가 있음.",
    care: "정기적으로 기분 변화를 기록하고, 스트레스를 줄이기 위한 이완 요법(예: 명상이나 요가)을 시도하세요.",
  },
  {
    name: "주요 우울장애 (Major Depressive Disorder)",
    explanation1:
      "흥미나 의욕의 현저한 저하, 수면 장애(불면증 또는 과다 수면).",
    explanation2:
      "체중 변화(식욕 감소 또는 증가)와 함께 집중력 저하 및 자살에 대한 생각이 있을 수 있음34.",
    care: "매일 가벼운 운동을 하여 신체 활동을 늘리고, 긍정적인 사회적 상호작용을 유지하세요.",
  },
  {
    name: "불안 장애 (Anxiety Disorder)",
    explanation1:
      "지속적인 불안감과 긴장감으로 인해 신체적 증상(두통, 소화 불량 등)이 나타날 수 있음.",
    explanation2: "사회적 상황에서의 두려움이나 회피 행동이 발생할 수 있음.",
    care: "심호흡이나 점진적 근육 이완법과 같은 이완 기법을 활용하여 불안을 관리하고, 필요시 전문가와 상담하세요.",
  },
];

const blogs = [
  {
    title: "블로그 제목 1",
    description: "이 블로그는 주제에 대한 설명입니다.",
    url: "https://example-blog1.com", // Replace with actual URL
  },
  {
    title: "블로그 제목 2",
    description: "이 블로그는 다른 주제에 대한 설명입니다.",
    url: "https://example-blog2.com", // Replace with actual URL
  },
  {
    title: "블로그 제목 3",
    description: "이 블로그는 또 다른 주제에 대한 설명입니다.",
    url: "https://example-blog3.com", // Replace with actual URL
  },
];

const RecommandList = () => {
  return (
    <Container>
      <RecommandListContainer>
        {diseases.map((disease, index) => (
          <DiseaseItem key={index}>
            <DiseaseName>{disease.name}</DiseaseName>
            <ul>
              <li>
                <DiseaseExplanation>{disease.explanation1}</DiseaseExplanation>
              </li>
              <li>
                <DiseaseExplanation>{disease.explanation2}</DiseaseExplanation>
              </li>
            </ul>
            <DiseaseCare>치료 방법: {disease.care}</DiseaseCare>
          </DiseaseItem>
        ))}
      </RecommandListContainer>

      {/* Sidebar for external blog */}
      <BlogSidebar>
        <BlogTitle>외부 블로그</BlogTitle>
        {blogs.map((blog, index) => (
          <div key={index}>
            <BlogContent>{blog.description}</BlogContent>
            <BlogLink href={blog.url} target="_blank" rel="noopener noreferrer">
              {blog.title}
            </BlogLink>
          </div>
        ))}
      </BlogSidebar>
    </Container>
  );
};

export default RecommandList;
