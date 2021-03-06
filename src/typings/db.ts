// 질문글 상세 data
export interface IQuestion {
  answers: IAnswer[];
  author: number;
  author_name: string;
  body: string;
  bounty: number;
  created_at: string;
  edited_at: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  num_likes: number;
  title: string;
}

// 질문글 list item data
export interface IQuestionListItem {
  author: number;
  author_name: string;
  body: string;
  bounty: number;
  created_at: string;
  edited_at: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  title: string;
}

// 질문글 list data
export interface IQuestionList {
  limit: number;
  offset: number;
  overall_count: number;
  questions: IQuestionListItem[];
}

// 답변 data
export interface IAnswer {
  author: number;
  author_name: string;
  body: string;
  comments: IComment[];
  created_at: string;
  edited_at: string;
  id: number;
  is_adopted: boolean;
  is_liked: "None" | boolean;
  like_id: "None" | number;
  num_likes: [number, number];
}

// 답변 list item
export interface IAnswerListItem {
  author: number;
  author_name: string;
  body: string;
  created_at: string;
  edited_at: string;
  id: number;
  is_adopted: boolean;
  is_liked: boolean;
  question: number;
}

// 댓글 data
export interface IComment {
  answer: number;
  author: number;
  author_name: string;
  body: string;
  created_at: string;
  edited_at: string;
  id: number;
  is_liked: "None" | boolean;
  like_id: "None" | number;
  num_likes: [number, number];
}

// 프로젝트 상세 data
export interface IProjectDetail {
  author_name: string;
  author: number;
  body: string;
  crew_field: string;
  crew_count: string;
  crew_recruit: string;
  crew_condition: string;
  created_at: string;
  edited_at: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  title: string;
}

// 프로젝트 리스트 item
export interface IProjectListItem {
  author_name: string;
  created_at: string;
  crew_field: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  title: string;
}

// 질문글 list data
export interface IProjectDetailList {
  limit: number;
  offset: number;
  overall_count: number;
  jobpostings: IProjectDetail[];
}

// 질문글 검색 결과
export interface IQuestionSearch {
  author: number;
  author_name: string;
  body: string;
  bounty: number;
  created_at: string;
  edited_at: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  title: string;
}

// 프로젝트 검색 결과
export interface IProjectSearch {
  author: number;
  author_name: string;
  body: string;
  created_at: string;
  crew_condition: string;
  crew_count: string;
  crew_field: string;
  crew_recruit: string;
  edited_at: string;
  hashtags: string[];
  id: number;
  is_liked: boolean;
  like_id: number;
  title: string;
}

// 유저 정보
export interface IUserInfo {
  answer_count: number;
  comment_count: number;
  jobposting_count: number;
  my_answers: IAnswerListItem[];
  my_projects: IProjectDetail[];
  my_questions: IQuestionListItem[];
  question_count: number;
}
