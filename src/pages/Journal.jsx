import { useState } from "react";
import Btn from "../comps/Btn";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

const Journal = () => {
  const [showMood, setShowMood] = useState(false);

  const toggleMood = () => {
    setShowMood((prevState) => !prevState);
  };

  return (
    <div>
      <header className="flex gap-3 justify-center items-center">
        <img
          src="https://64.media.tumblr.com/c3c4a0f0d8fd576d1ea260af7861d32e/b70c3a70fb2d7b68-3c/s75x75_c1/effc160b7192d5f19f376ec589977e643405e528.gifv"
          className="w-5 h-fit"
        />
        <h1 className="font-bold text-lg">Journal</h1>
        <img
          src="https://64.media.tumblr.com/c3c4a0f0d8fd576d1ea260af7861d32e/b70c3a70fb2d7b68-3c/s75x75_c1/effc160b7192d5f19f376ec589977e643405e528.gifv"
          className="w-5 h-fit"
        />
      </header>
      <main>
        <p>
          This is my journal space. I will sometimes post my thoughts of that
          day. Sharing my ideas to others in the world.
        </p>
        <div className="postsContainer">
          <div className="post" id="">
            <div className="post-header">
              <div>
                <img src="https://64.media.tumblr.com/01ae3fb68856c1872f81bc682112b13f/d0c9662391bde33e-bd/s75x75_c1/b76b43164f03423a3b0e121abee8bfe2b11abece.gifv" />
                <p className="">2024 . 03 . 14</p>
              </div>
              <Btn
                title={showMood ? "♡ Show Moodboard" : "♡ Reveal Moodboard"}
                content={
                  showMood ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />
                }
                onclick={toggleMood}
              />
            </div>
            {showMood && (
              <table className="post-mood">
                <tbody>
                  <tr>
                    <td id="feelingMood" title="♡ Feeling">
                      <img src="https://64.media.tumblr.com/55e5cefb2d83a724d5f06e5ad60c02dc/81c6c37e87d6c7b3-a4/s75x75_c1/d9041cdcee0fb849c3a74400a6b366867b023fe0.gifv" />
                      <p>Happy</p>
                    </td>
                    <td id="activityMood" title="♡ Activity">
                      <img src="https://64.media.tumblr.com/c9a22be4defdd1e1d2e2c215ce9b6f1f/8dbbfb71806f7020-fa/s75x75_c1/58c711df04030152e9a17890aed263bb40dd021a.gifv" />
                      <p>Coding...</p>
                    </td>
                    <td id="musicMood" title="♡ Music">
                      <img src="https://64.media.tumblr.com/ce06ee7ca0662b39c68ac9d0fbe8e34b/19c364ef7f492cf0-de/s75x75_c1/9dfe1c7c1b73de68786f5272d99748d8839c1b7c.gifv" />
                      <p>Cybercore</p>
                    </td>
                  </tr>
                  <tr>
                    <td id="gameMood" title="♡ Gaming">
                      <img src="https://64.media.tumblr.com/9fe26405d91806606531679aba01ced8/4d30ad4cd57d24f9-4c/s75x75_c1/efe5056d5f76b8f4f54f8996128eefcca838ad90.gifv" />
                      <p>Minecraft</p>
                    </td>
                    <td id="animeMood" title="♡ Anime">
                      <img src="https://64.media.tumblr.com/1a1ce964d2b348b5db05a0caaf56254a/daac041a2d6e68cb-58/s75x75_c1/21e822d0ecbb60093a52c52349dc32179014378a.gifv" />
                      <p>Black Blood Brothers</p>
                    </td>
                    <td id="weatherMood" title="♡ Weather">
                      <img src="https://64.media.tumblr.com/f2156b02909c6c3867e0d80098194586/b106357e98a8b070-fa/s75x75_c1/3b688f435f35bb4a63bca125e78f53e0b0d0eae9.gifv" />
                      <p>Sunny</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            <div className="post-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                perferendis officia fuga dolor magnam omnis ratione,
                voluptatibus consequatur nam. Praesentium porro aperiam, et
                repellat qui recusandae molestias in dolores reiciendis vero
                explicabo consequuntur nobis! Inventore nostrum tempora expedita
                quo assumenda voluptatum quia sapiente iste nulla fugit cum
                minima voluptatibus obcaecati temporibus sunt corrupti vero
                omnis nam vitae, cupiditate optio. Magni voluptate vero nam
                recusandae est dicta aperiam eius odio nesciunt adipisci quasi
                placeat excepturi eligendi dolorem, perferendis ratione modi
                dignissimos reprehenderit enim facilis, voluptatibus molestiae
                repellendus qui. Est dolores expedita sapiente animi voluptates
                iure enim quo, eius ipsum molestias in?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                perferendis officia fuga dolor magnam omnis ratione,
                voluptatibus consequatur nam. Praesentium porro aperiam, et
                repellat qui recusandae molestias in dolores reiciendis vero
                explicabo consequuntur nobis! Inventore nostrum tempora expedita
                quo assumenda voluptatum quia sapiente iste nulla fugit cum
                minima voluptatibus obcaecati temporibus sunt corrupti vero
                omnis nam vitae, cupiditate optio. Magni voluptate vero nam
                recusandae est dicta aperiam eius odio nesciunt adipisci quasi
                placeat excepturi eligendi dolorem, perferendis ratione modi
                dignissimos reprehenderit enim facilis, voluptatibus molestiae
                repellendus qui. Est dolores expedita sapiente animi voluptates
                iure enim quo, eius ipsum molestias in?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                perferendis officia fuga dolor magnam omnis ratione,
                voluptatibus consequatur nam. Praesentium porro aperiam, et
                repellat qui recusandae molestias in dolores reiciendis vero
                explicabo consequuntur nobis! Inventore nostrum tempora expedita
                quo assumenda voluptatum quia sapiente iste nulla fugit cum
                minima voluptatibus obcaecati temporibus sunt corrupti vero
                omnis nam vitae, cupiditate optio. Magni voluptate vero nam
                recusandae est dicta aperiam eius odio nesciunt adipisci quasi
                placeat excepturi eligendi dolorem, perferendis ratione modi
                dignissimos reprehenderit enim facilis, voluptatibus molestiae
                repellendus qui. Est dolores expedita sapiente animi voluptates
                iure enim quo, eius ipsum molestias in?
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Journal;
