function traerInformacionCategory() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Category/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuesta(respuesta);
    },
  });
}

function pintarRespuesta(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro de las Categorias  </h2> <table  border="1"  align="center">';

  myTable += "<tr>";
  myTable += "<td>Name</td>";
  myTable += "<td>Description</td>";
  myTable += "</tr>";
  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += '<td style="width : 100px;">' + respuesta[i].name + "</td>";
    myTable +=
      '<td style="width : 100px;">' + respuesta[i].description + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoCategoria").html(myTable);
}

function validarGuardarInformacionCategory() {
  var name = document.getElementById("name_cat").value;
  var description = document.getElementById("description_cat").value;

  if (name.length == 0) {
    alert("Por favor digite el nombre");
    return;
  }

  if (description.length == 0) {
    alert("Digite la descripcion de la Categoria");
    return;
  }
  guardarInformacionCategory();
}

function guardarInformacionCategory() {
  let var2 = {
    name: $("#name_cat").val(),
    description: $("#description_cat").val(),
  };

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var2),

    url: "http://144.22.58.165:8080/api/Category/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload();
      alert("No se guardo correctamente");
    },
  });
}

///////////////////Cabins//////////////////////////////////////
function traerInformacionCabin() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Cabin/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuestaCabins(respuesta);
    },
  });
}

function pintarRespuestaCabins(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro de Categorias  </h2> <table  border="1"  align="center">';
  myTable += "<tr>";
  myTable += "<td>Name</td>";
  myTable += "<td>Brand</td>";
  myTable += "<td>Rooms</td>";
  myTable += "<td>Description</td>";
  myTable += "<td>Categoria</td>";
  myTable += "</tr>";

  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].name + "</td>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].brand + "</td>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].rooms + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].description + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].category.name + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadocabana").html(myTable);
}

function guardarInformacionCabin() {
  var name = document.getElementById("name_cab").value;
  var brand = document.getElementById("brands").value;
  var rooms = document.getElementById("rooms").value;
  var description_cab = document.getElementById("description_cab").value;

  if (name.length == 0) {
    alert("Por favor digite el nombre");
    return;
  }

  if (brand.length == 0) {
    alert("Digite la marca de la cabaña ");
    return;
  }

  if (rooms.length == 0) {
    alert("Digite la cantidad de habitaciones d");
    return;
  }
  if (description_cab.length == 0) {
    alert("Digite la descripcion de la Cabaña");
    return;
  }
  guardarInformacionCabin1();
}

function guardarInformacionCabin1() {
  let cat = {
    id: $("#selectCateg").val(),
  };
  console.log(cat);

  let var3 = {
    name: $("#name_cab").val(),
    brand: $("#brands").val(),
    rooms: $("#rooms").val(),
    description: $("#description_cab").val(),
    category: cat,
  };

  console.log(var3);

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var3),

    url: "http://144.22.58.165:8080/api/Cabin/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },
  });
}

function listaCategorias() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Category/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      let $select = $("#selectCateg");
      $.each(respuesta, function (id, name) {
        $select.append(
          "<option value=" + name.id + ">" + name.name + "</option"
        );
        console.log("select " + name.id);
      });
    },
  });
}
//////////////////////Clientes//////////////////////////////////
function traerInformacionClient() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Client/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuestaClientes(respuesta);
    },
  });
}

function pintarRespuestaClientes(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro  de Clientes  </h2> <table  border="1"  align="center">';
  myTable += "<tr>";
  myTable += "<td>Name</td>";
  myTable += "<td>email</td>";
  myTable += "<td>Age</td>";
  myTable += "</tr>";

  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].name + "</td>";
    myTable += "<td style='width : 100px;'> " + respuesta[i].email + "</td>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].age + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoClient").html(myTable);
}

function guardarInformacionClient() {
  var name = document.getElementById("name_client").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("Password").value;
  var age = document.getElementById("age").value;

  if (name.length == 0) {
    alert("Por favor digite el nombre");
    return;
  }

  if (email.length == 0) {
    alert("Digite el  correo del usuario ");
    return;
  }

  if (password.length == 0) {
    alert("Digite el password");
    return;
  }
  if (age.length == 0) {
    alert("Digite los años ");
    return;
  }
  guardarInformacionClient1();
}

function guardarInformacionClient1() {
  let var4 = {
    name: $("#name_client").val(),
    email: $("#email").val(),
    password: $("#Password").val(),
    age: $("#age").val(),
  };

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var4),

    url: "http://144.22.58.165:8080/api/Client/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload();
      alert("No se guardo correctamente");
    },
  });
}

//////////////////////Messages//////////////////////////////////
function listaCabins() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Cabin/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      let $select = $("#selectCabin");
      let $select1 = $("#selectCabin1");
      $.each(respuesta, function (id, name) {
        $select.append(
          "<option value=" + name.id + ">" + name.name + "</option>"
        );
        $select1.append(
          "<option value=" + name.id + ">" + name.name + "</option>"
        );
        console.log("select  cabin" + name.id);
      });
    },
  });
}

function listaClient() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Client/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log("client" + respuesta);
      let $select = $("#selectClient");
      let $select1 = $("#selectClient1");
      $.each(respuesta, function (idClient, name) {
        $select.append(
          "<option value=" + name.idClient + ">" + name.name + "</option>"
        );
        $select1.append(
          "<option value=" + name.idClient + ">" + name.name + "</option>"
        );
        console.log("select client " + name.idClient);
      });
    },
  });
}

function traerInformacionMessage() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Message/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuestaMessage(respuesta);
    },
  });
}

function pintarRespuestaMessage(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro  de Mensajes  </h2> <table  border="1"  align="center">';
  myTable += "<tr>";
  myTable += "<td>Mensaje</td>";
  myTable += "<td>Cabin</td>";
  myTable += "<td>Client</td>";
  myTable += "</tr>";
  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].messageText + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].cabin.name + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].client.name + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoMesage").html(myTable);
}

function guardarInformacionMessage() {
  var message = document.getElementById("Message").value;

  if (message.length == 0) {
    alert("Por favor ddigite su mensaje");
    return;
  }

  guardarInformacionMessage1();
}

function guardarInformacionMessage1() {
  let cliente = {
    idClient: $("#selectClient").val(),
  };
  let cabins = {
    id: $("#selectCabin").val(),
  };

  let var5 = {
    messageText: $("#Message").val(),
    client: cliente,
    cabin: cabins,
  };
  console.log(var5);

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var5),

    url: "http://144.22.58.165:8080/api/Message/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload();
      alert("No se guardo correctamente");
    },
  });
}

//////////////////////Reservacion//////////////////////////////////

function traerInformacionReservation() {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Reservation/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuestaReservacion(respuesta);
    },
  });
}

function pintarRespuestaReservacion(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro  de Reservas  </h2> <table  border="1"  align="center">';
  myTable += "<tr>";
  myTable += "<td>Fecha Inicio</td>";
  myTable += "<td>Fecha Final</td>";
  myTable += "<td>Cliente</td>";
  myTable += "<td>Cabaña</td>";
  myTable += "<td>Calificacion</td>";
  myTable += "<td>Mensaje</td>";
  myTable += "</tr>";
  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + respuesta[i].startDate + "</td>";
    myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].client.name + "</td>";
    myTable +=
      "<td style='width : 100px;'>" + respuesta[i].cabin.name + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoReserv").html(myTable);
}

function guardarInformacionReservation() {
  var startDate = document.getElementById("startDate").value;
  var devolutionDate = document.getElementById("devolutionDate").value;

  if (startDate.length == 0) {
    alert("Por favor seleccione la fecha de inicio");
    return;
  }
  if (devolutionDate.length == 0) {
    alert("Por favor seleccione la fecha final");
    return;
  }

  guardarInformacionReservation1();
}

function guardarInformacionReservation1() {
  let cliente1 = {
    idClient: $("#selectClient1").val(),
  };
  let cabins1 = {
    id: $("#selectCabin1").val(),
  };

  let var6 = {
    startDate: $("#startDate").val(),
    devolutionDate: $("#devolutionDate").val(),
    client: cliente1,
    cabin: cabins1,
  };
  console.log(var6);

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var6),

    url: "http://144.22.58.165:8080/api/Reservation/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload();
      alert("No se guardo correctamente");
    },
  });
}

//////////////////////Administrador//////////////////////////////////

function traerInformacionAdmin(respuesta1) {
  $.ajax({
    url: "http://144.22.58.165:8080/api/Admin/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      console.log(respuesta);
      pintarRespuestaAdmin(respuesta);
    },
  });
}

function pintarRespuestaAdmin(respuesta) {
  let myTable =
    '  <h2 align="center"> Registro  de Usuarios Administradores  </h2> <table  border="1"  align="center">';
  myTable += "<tr>";
  myTable += "<td>Name</td>";
  myTable += "<td>email</td>";
  myTable += "</tr>";

  for (i = 0; i < respuesta.length; i++) {
    myTable += "<tr>";
    myTable += "<td style='width : 100px;'>" + respuesta[i].name + "</td>";
    myTable += "<td style='width : 100px;'> " + respuesta[i].email + "</td>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultadoAdmin").html(myTable);
}

function guardarInformacionAdmin() {
  var name = document.getElementById("name_adm").value;
  var email = document.getElementById("emailAdm").value;
  var password = document.getElementById("PasswordAdm").value;

  if (name.length == 0) {
    alert("Por favor digite nombre del administrador");
    return;
  }
  if (email.length == 0) {
    alert("Por favor digite correo ");
    return;
  }
  if (password.length == 0) {
    alert("Por favor digite Contraseña");
    return;
  }

  guardarInformacionAdmin1();
}

function guardarInformacionAdmin1() {
  let var4 = {
    name: $("#name_adm").val(),
    email: $("#emailAdm").val(),
    password: $("#PasswordAdm").val(),
  };

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(var4),

    url: "http://144.22.58.165:8080/api/Admin/save",

    success: function (response) {
      console.log(response);
      console.log("Se guardo correctamente");
      alert("Se guardo correctamente");
      window.location.reload();
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload();
      alert("No se guardo correctamente");
    },
  });
}
