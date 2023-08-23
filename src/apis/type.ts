export interface PosePickResponse {
  poseInfo: {
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
}

export interface PoseDetailResponse {
  poseInfo: {
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
}

export interface PoseTalkResponse {
  poseWord: {
    content: string;
    createdAt: string;
    updateAt: string;
    wordId: number;
  };
}
