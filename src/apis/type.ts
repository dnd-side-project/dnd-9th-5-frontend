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
};

// 포즈피드
export interface PoseFeedParameter {
  // pageNumber?: number;
  frameCount: number;
  peopleCount: number;
  // pageSize?: number;
  tags: string;
}
interface PoseFeedContentsSort  {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean
    }
interface PoseFeedContents {
  content: {poseInfo: PoseInfo}[];
  pageable: {
    sort: PoseFeedContentsSort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  },
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

export interface PosePickResponse {
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
