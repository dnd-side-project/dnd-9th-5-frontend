export interface PoseInfo {
  createdAt: string;
  frameCount: number;
  imageKey: string;
  peopleCount: number;
  poseId: number;
  source: string;
  sourceUrl: string;
  tagAttributes: string;
  updatedAt: string;
  bookmarkCheck: boolean;
  width?: number;
  height?: number;
}

// 포즈피드
interface PoseFeedContentsSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
export interface PoseFeedContents {
  content: Array<{ poseInfo: PoseInfo }>;
  pageable: {
    sort: PoseFeedContentsSort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  number: number;
  sort: PoseFeedContentsSort;
  size: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
export interface PoseFeedResponse {
  recommendation: boolean;
  filteredContents: PoseFeedContents;
  recommendedContents: PoseFeedContents;
}

// 필터 태그
interface FilterTag {
  createdAt: string;
  updatedAt: string;
  attributeId: number;
  attribute: string;
}
export interface FilterTagsResponse {
  poseTagAttributes: FilterTag[];
}

// 포즈픽
export interface PosePickResponse {
  poseInfo: PoseInfo;
}

export interface PoseDetailResponse {
  poseInfo: PoseInfo;
}

export interface PoseTalkResponse {
  poseWord: {
    content: string;
    createdAt: string;
    updateAt: string;
    wordId: number;
  };
}

// 로그인
export interface RegisterResponse {
  id: number;
  nickname: string;
  email: string;
  token: {
    accessToken: string;
    refreshToken: string;
    grantType: string;
    expiresIn: number;
  };
}

// 마이포즈
export interface MyposeCountResponse {
  bookmarkCount: number;
  uploadCount: number;
}
