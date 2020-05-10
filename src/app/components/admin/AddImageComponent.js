import React from "react";
import InputBox from "../common/InputBox";
import ImageService from "../../services/ImageService";

class AddImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', category: ""};
        this.updateImageName = this.updateImageName.bind(this);
        this.updateImageCategory = this.updateImageCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.imageService = new ImageService();
    }

    updateImageName(val) {
        this.setState({name: val});
    }
    updateImageCategory(val) {
        this.setState({category: val});
    }
    handleSubmit(event) {
        this.imageService.addImage(this.state);
        event.preventDefault();
    }
    render() {
        return  (
            <form onSubmit={this.handleSubmit}>
                <h2> {this.props.mode} Image </h2>
                <div>
                    <label htmlFor="name"> Name </label>
                    <InputBox type="text" name="name" onValueChange={this.updateImageName}/>
                </div>
                <div>
                    <label htmlFor="category"> Category </label>
                    <InputBox type="category" name="category" onValueChange={this.updateImageCategory}/>
                </div>
                <input type="submit" value="Submit"/>
                
            </form>
        );
    }
}

export default AddImage;