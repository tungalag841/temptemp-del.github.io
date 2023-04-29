import React from "react";
import SearchInput from "react-search-input";


export default function Search(){
  return (
    <div>
      <SearchInput
        placeholder="Хайх"
        onChange={this.searchUpdated}
        style={{ borderRadius: "20px" }}
      />
      {/* {filteredEmails.map(email => {
                 return (
                   <div className="mail" key={email.id}>
                     <div className="from">{email.user.name}</div>
                     <div className="subject">{email.subject}</div>
                    </div>
                     )
                    })} */}
    </div>
  );
}
// class Search extends Component {
//   render() {
    // return (
    //   <div>
    //     <SearchInput
    //       placeholder="Хайх"
    //       onChange={this.searchUpdated}
    //       style={{ borderRadius: "20px" }}
    //     />
    //     {/* {filteredEmails.map(email => {
    //                return (
    //                  <div className="mail" key={email.id}>
    //                    <div className="from">{email.user.name}</div>
    //                    <div className="subject">{email.subject}</div>
    //                   </div>
    //                    )
    //                   })} */}
    //   </div>
    // );
//   }
// }
