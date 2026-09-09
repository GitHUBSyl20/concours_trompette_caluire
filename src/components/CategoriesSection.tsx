import { categories, sectionContent } from '../data/siteData'
import './CategoriesSection.css'

/**
 * Liste des cinq catégories du concours et de leurs limites d'âge, reprises
 * du programme (cf. `siteData`).
 */
function CategoriesSection() {
  return (
    <section
      className="section categories"
      id="categories"
      aria-labelledby="categories-title"
    >
      <div className="container">
        <h2 className="section__title" id="categories-title">
          {sectionContent.categories.title}
        </h2>

        <ul className="categories__list">
          {categories.map((category) => (
            <li className="categories__item" key={category.id}>
              <h3 className="categories__name">{category.name}</h3>
              <p className="categories__condition">{category.ageCondition}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CategoriesSection
