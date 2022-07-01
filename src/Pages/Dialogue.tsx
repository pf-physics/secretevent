import React, { FC } from 'react';

export interface Dialogue {
  text: string;
  textArr?: string[];
  input: string
  component: FC;
}

export interface ComponentReply {
  text: string;
  valid: boolean;
}