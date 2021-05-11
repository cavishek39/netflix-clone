export interface HomeCategoryComponentProps {
  /**
   * Model of the category
   */
  category: {
    id: string
    title: string
    movies: {
      id: string
      poster: string
    }[]
  }
}
