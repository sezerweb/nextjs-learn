import content from "../public/menu.json";
import Link from "next/link";

export default function SidebarMenu({ children }) {
  /*let str = "";

  const menu = content.map((lists) => {
    str += "<h4>" + lists.name + "</h4>";
    str += "<ul>";

    const menu2 = lists.subCategory.map((lists2) => {
      str += "<li>";
      str += "<Link href=" + lists2.url + "><a>" + lists2.name + "</a</Link>";

      str += "<ul>";
      const menu3 = lists2.list.map((lists3) => {
        str +=
          "<li><Link href=" +
          lists3.url +
          "><a>" +
          lists3.name +
          "</a</Link></li>";
      });

      str += "</ul>";
      str += "</li>";
    });
    str += "</ul>";
  });*/

  return (
    <>
      {content.map((lists) => (
        <>
          <h4 key={lists.id}>{lists.name}</h4>
          <ul>
            {lists.subCategory.map((lists2) => (
              <>
                <li key={lists2.id}>
                  <Link href={lists2.url}>
                    <a>{lists2.name}</a>
                  </Link>
                  <ul>
                    {lists2.list.map((lists3) => (
                      <>
                      <li key={lists3.id}>
                        <Link href={lists3.url}>
                          <a>{lists3.name}</a>
                        </Link>
                      </li>
                      </>
                    ))}
                  </ul>
                </li>
              </>
            ))}
          </ul>
        </>
      ))}
    </>
  );
}
