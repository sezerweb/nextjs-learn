import content from "../public/menu.json";
import Link from "next/link";

export default function SidebarMenu({ children }) {
  return (
    <div>
      {content.map((lists) => (
        <div key={lists.name}>
        <h4 key={lists.id}>{lists.name}</h4>
        <ul>
            {lists.subCategory.map((lists2) => (
              <div  key={lists2.id}>
                <li key={lists2.url}>
                  <Link href={lists2.url}>
                    <a>{lists2.name}</a>
                  </Link>
                  <ul>
                    {lists2.list.map((lists3) => (
                      <div key={lists3.id}>
                      <li key={lists3.url}>
                        <Link href={lists3.url}>
                          <a>{lists3.name}</a>
                        </Link>
                      </li>
                      </div>
                    ))}
                  </ul>
                </li>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
