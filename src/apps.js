var userName = "Javier";
var userHobbie = "Tattoos";
var zipcode = "10100";

var user = {
    name: "Javier!"
}

var template = (
    <div>
        <h1>This is the blog from {user.name}</h1>
        <h2>Today's topic is: {userHobbie}</h2>
    </div>)
;

class Car extends React.Component{
    render(){
        return(

            <h2>This is a car {this.props.color}</h2>
        );
    }
}

class Element extends React.Component{
    render(){
        return(

            <div >
                <h2> {this.props.h}</h2>
                <h4>{this.props.habilidad}</h4>
            </div>
        );
    }
}
class Album extends React.Component{
    render(){

  return(
    <main>
    <div class="album py-5 bg-light">
      <div class="container">
  
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Imagen</text></svg>
  
              <div class="card-body">
                <p class="card-text">Estudiante de ingenieria en la universidad del Istmo</p>
                <div class="d-flex justify-content-between align-items-center">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </main>
  );
    }
}

//Implementando bootstrap con react
class Column extends React.Component{
    render(){
        return(

            <div class="container" id="caja">
                    <div class="row">
                    <div class="col-sm-4">
                    <Element h="Habilidad Principal" habilidad="Programacion en React" />
                    <Element h="Habilidad Secundaria" habilidad="Fotografia Profesional" />
                    <Element h="Habilidad Terciaria" habilidad="Estudio de tatuajes"  />
                    </div>
                </div>
            </div>
        );
    }
}

class Column2 extends React.Component{
    render(){
        return(

            <div class="container" id="caja">
                    <div class="row">
                    <div class="col-sm-4">
                    <Element h="Telefono" habilidad="5041590" />
                    <Element h="Correo Electronico" habilidad="lopez191204@unis.edu.gt" />
                    <Element h="Redes Sociales" habilidad="@redesSociales"  />
                    </div>
                </div>
            </div>
        );
    }
}

class Column3 extends React.Component{
    render(){
        return(

            <div class="container" id="caja">
                    <div class="row">
                    <div class="col-sm-4">
                    <Element h="Idiomas" habilidad="Español||Ingles" />
                    <Element h="Cualidades" habilidad="Solidarirdad||Liderazgo" />
                    <Element h="Experiencia" habilidad="200 horas supervisadas en: Byte||Lego Robotics"  />
                    </div>
                </div>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div id= "caja">
            <div class="jumbotron text-center">
                <h1>Javier Alejandrop Lopez Guzman</h1>
                <p>Estudiante ingenieria en sistemas</p>
            </div>
            <Album/>
            <Column />  
            <Column3/>
            <Column2/>
            </div>
        );
    }
}
//Hasta aqui la implemetacion de bootstgrap con react
class Garage extends React.Component{
    render(){
/*
        constructor(props){
            super(props);
            this.state = {
                emp_no : '',
                first_name: '',
                last_name: '',
                gender:'',
                birth_date:''
            }

        }
*/
        return(

            <div>

                <Header />
                
            </div>
        );
    }
}



var appRoot = document.getElementById('app');

ReactDOM.render(<Garage/>,appRoot);