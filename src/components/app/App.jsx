import Info from "../info/info.jsx";
import Compitenties from "../compitenties/compitenties.jsx";
import { listCompetenties, targetList } from "../../utils/data.js";
import { v4 as uuid } from "uuid";
import CardCompetention from "../card/card.jsx";
import styles from "./App.module.css";
import { useState } from "react";
import Target from "../target/target.jsx";
import Button from "../button/button.jsx";

function App() {
  const [openCompetenties, setOpenCompetenties] = useState(true);
  const [data, setData] = useState(listCompetenties);
  const [filter, setFilter] = useState("");
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const [valueImage, setValueImage] = useState("");
  const [valueLevel, setValueLevel] = useState("");

  const showCompetenties = () => {
    setFilter("");
    setOpenCompetenties((prevState) => !prevState);
  };

  const handleClickMore = () => {
    setFilter("moreFifty");
  };

  const handleClickLess = () => {
    setFilter("lessFifty");
  };

  const onChangeInput = (e, setValue) => {
    setValue(e.target.value);
  };

  const addSkill = (image, title, description, level) => {
    const levelChecked = parseInt(level) > 100 ? 100 : parseInt(level);
    const currentDate = new Date();
    const id = Math.floor(currentDate.getTime() / 1000);
    const updateData = [
      ...data,
      { image, title, description, level: levelChecked, id },
    ];
    setData(updateData);
    setValueTitle("");
    setValueDescription("");
    setValueLevel("");
    setValueImage("");
  };

  const deleteSkill = (id) => {
    const updateData = data.filter(el => el.id !== id);
    setData(updateData);
  };

  return (
    <>
      <Info
        showCompetenties={showCompetenties}
        openCompetenties={openCompetenties}
      />
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Заголовок"
          onChange={(e) => onChangeInput(e, setValueTitle)}
          value={valueTitle}
          required
        />
        <input
          type="text"
          placeholder="Описание"
          onChange={(e) => onChangeInput(e, setValueDescription)}
          value={valueDescription}
        />
        <input
          type="text"
          placeholder="Ссылка на картинку"
          onChange={(e) => onChangeInput(e, setValueImage)}
          value={valueImage}
        />
        <input
          type="number"
          placeholder="Уровень"
          onChange={(e) => onChangeInput(e, setValueLevel)}
          value={valueLevel}
          min={0}
          max={100}
        />
        <Button
          text="Добавить компетенцию"
          onClick={() =>
            addSkill(valueImage, valueTitle, valueDescription, valueLevel)
          }
        />
      </form>
      <div className={styles.buttons}>
        <Button
          text="Показать компетенции с уровнем изучения ≥ 50%"
          onClick={handleClickMore}
        />
        <Button
          text="Показать компетенции с уровнем изучения < 50%"
          onClick={handleClickLess}
        />
      </div>
      {openCompetenties && (
        <Compitenties title="Мои компетенции">
          <ul className={styles.listCompetentions}>
            {data.map((el) => {
              if (
                filter === "" ||
                (filter === "moreFifty" && el.level >= 50) ||
                (filter === "lessFifty" && el.level < 50)
              ) {
                return (
                  <li key={uuid()}>
                    <CardCompetention
                      mycompitentios={true}
                      image={el.image}
                      title={el.title}
                      description={el.description}
                      level={parseInt(el.level)}
                      deleteCard={deleteSkill}
                      id={el.id}
                    />
                  </li>
                );
              }
            })}
          </ul>
        </Compitenties>
      )}
      <Target title="Технологии, которые хочу изучить">
        <ul className={styles.listCompetentions}>
          {targetList.map((el) => (
            <li key={uuid()}>
              <CardCompetention image={el.image} title={el.title} />
            </li>
          ))}
        </ul>
      </Target>
    </>
  );
}

export default App;
