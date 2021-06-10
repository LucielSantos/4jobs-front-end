export interface ICandidateDetails {
  id: string;
  name: string;
  email: string;
  about?: string;
  description?: string;
  experiences?: string[];
  formations?: string[];
  locality?: string;
  skills?: string[];
}

export interface ICandidateDetailsEdit {
  about?: string;
  description?: string;
  experiences?: string[];
  formations?: string[];
  locality?: string;
  skills?: string[];
}
