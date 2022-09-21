<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https:cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
      integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
      integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </head>
  <body>
    <div class="page">
      <h1>My Favourite movies</h1>
      <div class="row">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Title</span
            >
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            id="moviename"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Rating</span
            >
          </div>
          <input
            type="number"
            class="form-control"
            aria-label="Sizing example input"
            id="ratings"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <button
          style="margin: 10px 50px"
          id="btn"
          type="button"
          class="btn btn-danger"
        >
          Add
        </button>

        <button
          style="margin: 10px 50px"
          id="resetall"
          type="button"
          class="btn btn-danger"
        >
          Reset Session
        </button>
      </div>
    </div>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            <div style="display: flex; flex-direction: row; align-item: center">
              <p style="font-size: 25px; margin: 0px 0px">Title</p>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                "
              >
                <img
                  id="titleup"
                  style="width: 20px; margin: 0px 10px; cursor: pointer"
                  src="up.png"
                />
                <img
                  id="titledown"
                  style="width: 20px; margin: 0px 10px; cursor: pointer"
                  src="down.png"
                />
              </div>
            </div>
          </th>

          <th scope="col">
            <div style="display: flex; flex-direction: row; align-item: center">
              <p style="font-size: 25px; margin: 0px 0px">Rating</p>

              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                "
              >
                <img
                  style="width: 20px; margin: 0px 10px; cursor: pointer"
                  src="up.png"
                  id="ratingup"
                />
                <img
                  style="width: 20px; margin: 0px 10px; cursor: pointer"
                  src="down.png"
                  id="ratingdown"
                />
              </div>
            </div>
          </th>

          <th scope="col" style="font-size: 25px">Delete</th>
        </tr>
      </thead>

      <tbody id="alllist"></tbody>
    </table>
    <script>
      $(document).ready(function () {
        showtable();
        function showtable() {
          $.ajax({
            type: "POST",
            url: "server.php",
            data: {
              showtable: true,
            },
            success: (result) => {
              showdata(result);
            },
          });
        }
        function showdata(result) {
          {
            let arr = JSON.parse(result);
            let row = "";

            Object.keys(arr).map((item, rate) => {
              row += ` <tr>
                        <td>${item}</td>
                        <td>${arr[item]}</td>
                        <td><button id ="${item}"class="btn btn-danger delete-row">Delete</button></td>
                      </tr>`;
            });
            $("#alllist").html(row);
          }
        }
        document.body.addEventListener("click", function (event) {
          if (event.target.classList.contains("delete-row")) {
            console.log(event.target.id);
            delete_movie(event.target.id, event);
          }
        });

        $("#ratingup").on("click", function () {
          $.ajax({
            type: "POST",
            url: "server.php",
            data: {
              ratingass: true,
            },
            success: (result) => {
              showdata(result);
            },
          });
        });

        $("#ratingdown").on("click", function () {
          $.ajax({
            type: "POST",
            url: "server.php",
            data: {
              ratingdes: true,
            },
            success: (result) => {
              showdata(result);
            },
          });
        });

        $("#titleup").on("click", function () {
          $.ajax({
            type: "POST",
            url: "server.php",
            data: {
              titleass: true,
            },
            success: (result) => {
              showdata(result);
            },
          });
        });

        $("#titledown").on("click", function () {
          $.ajax({
            type: "POST",
            url: "server.php",
            data: {
              titledes: true,
            },
            success: (result) => {
              showdata(result);
            },
          });
        });

        $("#btn").on("click", function () {
          let titles = document.getElementById("moviename").value;
          let rating = document.getElementById("ratings").value;
          if (titles == "" || rating == "") {
            alert("All fields are required!");
          } else {
            $.ajax({
              url: "server.php",
              type: "POST",
              data: {
                title: titles,
                rate: rating,
              },
              success: function (result) {
                showdata(result);
              },
            });
          }
        });

        $("#resetall").on("click", function () {
          $.ajax({
            url: "server.php",
            type: "POST",
            data: {
              destroy: true,
            },
            success: function (result) {
              window.location.reload();
            },
          });
        });

        function delete_movie(item, event) {
          event.target.closest("tr").remove();
          $.ajax({
            type: "POST",
            url: "server.php",
            data: {
              deleterow: item,
            },
            success: (result) => {
              let arr = JSON.parse(result);
              showdata(arr);
            },
          });
        }
      });
    </script>
  </body>
</html>
