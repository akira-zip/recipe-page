import Image from 'next/image'
import Omelette from '@/../public/images/omelette.png'
import { Outfit, YoungSerif } from '@/lib/fonts'
import { ContainerStyles, ListStyles, TextStyles, TableStyles } from '@/lib/styles'

export default function Index() {
  return(
    <main className='w-[60vw] h-auto bg-(--white) rounded-[2vw] flex flex-col justify-start items-center gap-[2vw] relative top-[16vh] p-[2vw]'>
      <Image
        src={Omelette}
        width={900}
        height={600}
        alt='Omelette'
        className='rounded-[2vw]'
      />

      <section className={ContainerStyles.Container}>
        <div className={YoungSerif.className}>
          <p className={TextStyles.HugeTitle}>Simple omelette recipe</p>
        </div>

        <div className={Outfit.className}>
          <p className={TextStyles.Text}>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
        </div>
      </section>

      <section className={ContainerStyles.ModifiedContainer}>
        <div className={Outfit.className}>
          <p className={TextStyles.LittleTitle}>Preparation time</p>
        </div>

        <div className={Outfit.className}>
          <ol className={ListStyles.ModifiedUnorderedList}>
            <li><strong>Total: </strong>Approximately 10 minutes</li>

            <li><strong>Preparation: </strong>5 minutes</li>
            
            <li><strong>Cooking: </strong>5 minutes</li>
          </ol>
        </div>
      </section>

      <section className={ContainerStyles.Container}>
        <div className={YoungSerif.className}>
          <p className={TextStyles.Title}>Ingredients</p>
        </div>

        <div className={Outfit.className}>
          <ol className={ListStyles.UnorderedList}>
            <li>2-3 large eggs</li>

            <li>Salt, to taste</li>
            
            <li>Pepper, to taste</li>
            
            <li>1 tablespoon of butter or oil</li>
            
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ol>
        </div>
      </section>

      <hr className='w-[100%] h-[1px]'/>

      <section className={ContainerStyles.Container}>
        <div className={YoungSerif.className}>
          <p className={TextStyles.Title}>Instructions</p>
        </div>

        <div className={Outfit.className}>
          <ol className={ListStyles.OrderedList}>
            <li>
              <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
            </li>

            <li>
              <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
            </li>

            <li>
              <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            
            <li>
              <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
            </li>
            
            <li>
              <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </li>
            
            <li>
              <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>
      </section>

      <hr className='w-[100%] h-[1px]'/>

      <section className={ContainerStyles.Container}>
        <div className={YoungSerif.className}>
          <p className={TextStyles.Title}>Nutrition</p>
        </div>

        <div className={Outfit.className}>
          <p className={TextStyles.Text}>The table below shows nutritional values per serving without the additional fillings.</p>
        </div>

        <div className={Outfit.className}>
          <table className={TableStyles.Table}>
            <thead className={TableStyles.Section}>
              <tr className={`${TableStyles.Row} text-(--light-gray)`}>
                <th>Calories</th>
              </tr>
              
              <tr className={`${TableStyles.Row} text-(--light-gray)`}>
                <th>Carbs</th>
              </tr>
              
              <tr className={`${TableStyles.Row} text-(--light-gray)`}>
                <th>Protein</th>
              </tr>
              
              <tr className={`${TableStyles.Row} text-(--light-gray)`}>
                <th>Fat</th>
              </tr>
            </thead>

            <tbody className={TableStyles.Section}>
              <tr className={`${TableStyles.Row} text-(--brown)`}>
                <td><strong>277 kcal</strong></td>
              </tr>
              
              <tr className={`${TableStyles.Row} text-(--brown)`}>
                <td><strong>0 g</strong></td>
              </tr>
              
              <tr className={`${TableStyles.Row} text-(--brown)`}>
                <td><strong>20 g</strong></td>
              </tr>
              
              <tr className={`${TableStyles.Row} text-(--brown)`}>
                <td><strong>22 g</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}