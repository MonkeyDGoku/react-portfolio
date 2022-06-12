import React from "react";
import "./Technologies.css";

function Technologies() {
  const techArr = {
    backend: [
      "logo-api.png",
      "logo-asp-dotnet.jpg",
      "logo-csharp.png",
      "logo-dot-netcore.png",
      "logo-ef-core.png",
      "logo-sharepoint.png",
    ],
    frontend: [
      "logo-html.png",
      "logo-javascript.png",
      "logo-bootstrap.png",
      "logo-materail-ui.png",
      "logo-reactjs.png",
      "logo-vuejs.png",
    ],
    tools: [
      "logo-github.png",
      "logo-azure-ado.png",
      "logo-docker.png",
      "logo-pega.png",
      "logo-sonarqube.png",
      "logo-whitesource.png",
    ],
    database: [
      "logo-mysql.png",
      "mongodb.png",
      "oracle-sql-logo.jpg",
      "oracle-sql.png",
      "postgre.png",
      "redis.png",
      "ssms.png",
    ],
  };

  return (
    <div className="technologies">
      <div className="tech__blur"></div>
      <div className="tech__content">
        {Object.keys(techArr).map((techRow, index) => {
          return (
            <div className="tech__row" key={techRow + "_" + index}>
              <div
                className={`tech_row_part animate-1 ${
                  index % 2 === 1 ? "row_left" : ""
                }`}
              >
                {techArr[techRow]?.map((logo, logoIndex) => {
                  return (
                    <img
                      className="logo"
                      key={techRow + "_" + index + "_" + logoIndex}
                      src={require(`../../assets/images/${techRow}/${logo}`)}
                      alt="logo"
                    />
                  );
                })}
              </div>
              <div
                className={`tech_row_part animate-2 ${
                  index % 2 === 1 ? "row_left" : ""
                }`}
              >
                {techArr[techRow]?.map((logo, logoIndex) => {
                  return (
                    <img
                      className="logo"
                      key={techRow + "_" + index + "_" + logoIndex}
                      src={require(`../../assets/images/${techRow}/${logo}`)}
                      alt="logo"
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
