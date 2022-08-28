import Header from "./components/Header";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import NotesHolder from "./components/NotesHolder";

const list = [
  {
    title: "Title",
    desc: "Qui officia cupidatat excepteur nisi reprehenderit cupidatat. Consectetur incididunt irure ullamco pariatur. Veniam proident elit laboris quis aute. Laboris nisi consequat officia voluptate dolore nulla consequat eu voluptate do tempor eiusmod adipisicing. Labore consectetur tempor pariatur nulla duis voluptate fugiat eu Lorem commodo ipsum minim eiusmod.",
  },
  {
    title: "Title",
    desc: "Nisi nisi aliqua enim nostrud amet exercitation. Pariatur commodo ut ipsum anim est duis dolore consectetur sunt cillum sint aute qui culpa. Aliqua quis in ullamco tempor pariatur in veniam ad incididunt. Irure nisi elit in aliqua. Est esse eu proident duis.",
  },
  {
    title: "Title",
    desc: "Ea sit laboris non occaecat consequat nisi adipisicing duis proident. Laborum consectetur id eu id ut labore. Adipisicing irure et labore nisi consequat quis nostrud nostrud excepteur exercitation. Eiusmod consequat veniam esse amet dolore occaecat irure dolore laboris do magna id cupidatat sunt. Non excepteur enim officia cupidatat. Do sit pariatur aute tempor enim ex eu culpa. Lorem culpa consequat veniam enim est sunt nulla veniam officia.",
  },
  {
    title: "Title",
    desc: "Quis deserunt aute ut enim amet ut enim pariatur magna anim commodo nulla duis. Labore do elit fugiat deserunt fugiat aute. Aliqua voluptate sunt in et ut adipisicing id id nostrud exercitation et. Ad mollit consectetur do anim aliqua excepteur sint proident velit ad laborum aute.",
  },
  {
    title: "Title",
    desc: "Nulla ipsum irure ipsum elit nisi veniam do esse excepteur amet. Duis minim cillum quis deserunt officia. Occaecat veniam et laborum velit mollit duis excepteur in. Do amet sunt duis do non minim dolore proident. Aliqua velit velit irure reprehenderit aute ullamco aliquip anim officia exercitation anim ipsum ad. Velit voluptate mollit non ut quis nulla aliquip in id amet consequat voluptate deserunt velit. Dolore irure aute fugiat id id deserunt nostrud excepteur.",
  },
  {
    title: "Title",
    desc: "Aute laboris ex velit et sint sint id est ad cupidatat. Sit officia culpa in in consequat et do laborum sint aute consequat. Do anim nostrud non officia aliquip et ea incididunt ex aliqua consequat. Velit non nisi aliqua non laboris tempor duis. Tempor qui exercitation sunt magna incididunt sit. Dolore exercitation veniam do quis nostrud eu amet commodo qui. Commodo anim irure ea magna cillum ullamco sunt nisi proident minim ut est ea dolor.",
  },
  {
    title: "Title",
    desc: "Velit dolor culpa ullamco consequat proident in. Dolore ut voluptate tempor ex voluptate eiusmod incididunt velit ea culpa. Lorem dolor cillum velit do consequat quis enim culpa exercitation non incididunt quis sunt. Excepteur ipsum irure officia consectetur fugiat nulla Lorem consequat minim laboris consectetur proident do.",
  },
  {
    title: "Title",
    desc: "Tempor sint eu incididunt sit in laborum excepteur occaecat pariatur. Esse ex mollit fugiat sunt cupidatat amet. Laboris ex ad nostrud qui officia ut ex magna in amet elit fugiat. Pariatur consequat fugiat amet duis cupidatat occaecat et aute voluptate enim officia esse.",
  },
  {
    title: "Title",
    desc: "Esse dolore consectetur do ullamco ut cupidatat deserunt mollit Lorem elit consectetur. Anim ipsum quis dolor consequat. Labore exercitation ad nisi nisi eu.",
  },
  {
    title: "Title",
    desc: "Consequat irure nisi magna consequat pariatur id velit sit culpa tempor consequat. Do esse sint nostrud amet aliquip sunt mollit est. Nulla irure voluptate deserunt aute do commodo. Labore magna aliqua reprehenderit reprehenderit exercitation eiusmod amet tempor ut. Ullamco amet quis non minim aute cupidatat excepteur minim exercitation nostrud incididunt non quis. In cillum do pariatur culpa enim dolore minim magna reprehenderit esse fugiat.",
  },
  {
    title: "Title",
    desc: "Nisi ut consequat nostrud ipsum officia non occaecat consequat fugiat excepteur ipsum anim. Sunt ad incididunt sunt reprehenderit. Est minim cupidatat sint aute velit dolore magna.",
  },
  {
    title: "Title",
    desc: "Qui est duis id cupidatat commodo velit esse ut labore sit veniam aliqua. Duis deserunt magna voluptate in commodo velit reprehenderit deserunt exercitation do. Non anim enim minim enim adipisicing et pariatur cupidatat fugiat quis officia quis ullamco. Proident consectetur nisi consectetur reprehenderit aute enim. Officia deserunt esse qui dolor in et fugiat fugiat amet reprehenderit et ea. Officia et incididunt pariatur qui officia ad.",
  },
  {
    title: "Title",
    desc: "Fugiat ullamco aute veniam exercitation mollit nostrud sunt elit esse reprehenderit. Duis aliqua dolor ut cillum ad qui veniam enim consequat nulla. Aute ipsum deserunt voluptate minim aute ea incididunt sint eu sit consequat. Anim nostrud sit velit aliqua reprehenderit ea culpa quis aute enim veniam.",
  },
  {
    title: "Title",
    desc: "Duis eiusmod dolore commodo est aliquip laboris Lorem. Adipisicing laboris irure et elit veniam incididunt adipisicing quis veniam anim laboris sunt consectetur elit. Sit eiusmod id labore enim consequat adipisicing.",
  },
  {
    title: "Title",
    desc: "Anim cupidatat Lorem ad laborum proident dolor eiusmod aute culpa. Cupidatat sunt aliquip in consequat consequat qui duis proident aliqua adipisicing aliquip laboris. Aliquip non ex enim fugiat minim voluptate et labore.",
  },
  {
    title: "Title",
    desc: "Ad adipisicing ad occaecat cupidatat commodo aliquip non ea. Laboris non cupidatat quis amet excepteur velit exercitation sunt officia aliquip elit dolor. Voluptate dolore do magna exercitation labore anim adipisicing Lorem est eu. Aliquip eiusmod dolor proident in. Incididunt qui incididunt Lorem excepteur. In eu veniam anim pariatur.",
  },
  {
    title: "Title",
    desc: "Laborum cupidatat eu dolore veniam veniam dolore incididunt labore ad. Aliqua do est nisi commodo sunt nostrud deserunt deserunt. Elit nulla tempor mollit elit ad deserunt sunt aliquip occaecat tempor consequat minim. Cupidatat ullamco nostrud dolore cillum eu irure voluptate culpa commodo. Ipsum pariatur ea sit ut. Ut pariatur incididunt aliquip nulla anim elit cupidatat consequat ut adipisicing duis sit. Officia sunt ut culpa non nulla culpa excepteur laborum aliqua fugiat sunt Lorem.",
  },
];

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <CreateNote />
      <NotesHolder>
        {list.map((item) => (
          <Notes data={item} />
        ))}
      </NotesHolder>
    </div>
  );
}

export default App;
