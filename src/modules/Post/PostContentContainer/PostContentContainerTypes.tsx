/**
 * @file PostContentContainerTypes.ts
 * @description This file contains the type definitions for the properties used in the PostContentContainer component.
 */

/**
 * LinkPostTypes Interface
 *
 * Represents the structure of a link in a post.
 *
 * @interface LinkPostTypes
 * @property {string} to - The URL to navigate to.
 * @property {string} title - The title of the link.
 */
export interface LinkPostTypes {
  to: string;
  title: string;
}

/**
 * PostContentContainerPropTypes Interface
 *
 * Represents the properties used by the PostContentContainer component.
 *
 * @interface PostContentContainerPropTypes
 * @property {string} content - The main content of the post.
 * @property {LinkPostTypes} [link] - Optional link associated with the post.
 * @property {boolean} hasLink - Flag indicating if the post has a link.
 */
export interface PostContentContainerPropTypes {
  content: string;
  link?: LinkPostTypes;
  hasLink: boolean;
}
