/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

import { FaTrashAlt } from 'react-icons/fa';
import api from '../../services/api';
import Container from '../../components/Container';
import {
  TitleContainer,
  SearchForm,
  PopupContainer,
  List,
  AddForm,
} from './styles';
import logo from '../../images/logo.png';

export default class Main extends Component {
  state = {
    show: 'hidden',
    tools: [],
    searchTags: false,
    search: '',
    headers: {
      'Content-Type': 'application/json',
    },
    title: '',
    link: '',
    description: '',
    tags: [],
    params: {},
  };

  handleAddTitle = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleAddDescription = e => {
    this.setState({
      description: e.target.value,
    });
  };

  handleAddLink = e => {
    this.setState({
      link: e.target.value,
    });
  };

  handleAddTags = e => {
    const tags = e.target.value.split(' ');

    this.setState({
      tags,
    });
  };

  handleAddSubmit = async e => {
    e.preventDefault();

    const { link, description, title, tags } = this.state;

    api.post('/tools', {
      title,
      description,
      link,
      tags,
    });

    this.setState({
      show: 'hidden',
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await this.getTools();

    this.setState({
      tools: response,
    });
  };

  handleInput = async e => {
    this.setState({
      search: e.target.value,
    });

    const response = await this.getTools();

    this.setState({
      tools: response,
    });
  };

  handleToggle = async () => {
    const { searchTags } = this.state;

    searchTags
      ? this.setState({ searchTags: false })
      : this.setState({ searchTags: true });

    const response = await this.getTools();

    this.setState({
      tools: response,
    });
  };

  showAddForm = () => {
    this.setState({
      show: 'visible',
    });
  };

  handleDelete = async id => {
    const { tools } = this.state;
    const response = await api.delete(`/tools/${id}`);

    this.setState({
      tools: tools.filter(tool => tool.id !== id),
    });
    return response;
  };

  getTools = async () => {
    const { searchTags, search, headers, params } = this.state;

    if (searchTags) {
      const tags = search.split(', ');
      this.setState({
        params: {
          tags_like: tags,
        },
      });
    } else {
      this.setState({
        params: {
          q: search,
        },
      });
    }

    const response = await api.get('/tools', {
      headers,
      params,
    });

    return response.data;
  };

  render() {
    const { search, tools, show } = this.state;

    return (
      <>
        <PopupContainer show={show}>
          <Container>
            <AddForm onSubmit={this.handleAddSubmit}>
              <h1>+ADD</h1>

              <label htmlFor="addTool">Tool Name</label>
              <input id="addTool" type="text" onChange={this.handleAddTitle} />

              <label htmlFor="addLink">Link</label>
              <input id="addLink" type="text" onChange={this.handleAddLink} />
              <label htmlFor="">Description</label>
              <textarea
                id="addDesciption"
                onChange={this.handleAddDescription}
              />
              <label htmlFor="addTags">Tags</label>
              <input id="addTags" type="text" onChange={this.handleAddTags} />

              <button type="submit">Add Tool</button>
            </AddForm>
          </Container>
        </PopupContainer>
        <Container>
          <TitleContainer>
            <div>
              <strong>
                <h1>VUTTR</h1>
              </strong>
              <h2>Very Useful Tools To Remember</h2>
            </div>
            <img src={logo} alt="logo" />
          </TitleContainer>
          <SearchForm onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={this.handleInput}
            />
            <label htmlFor="tags">
              <input id="tags" type="checkbox" onChange={this.handleToggle} />
              Search in tags only
            </label>
            <button type="button" onClick={this.showAddForm}>
              Add
            </button>
          </SearchForm>
          <List>
            {tools.map(tool => (
              <li key={tool.id} on>
                <div>
                  <strong />
                  <a href={tool.link}>{tool.title}</a>
                  <p>{tool.description}</p>
                  {tool.tags
                    .map(t => <strong>{t}</strong>)
                    .reduce((prev, curr) => [prev, ' ', curr])}
                </div>
                <button
                  type="button"
                  onClick={() => this.handleDelete(tool.id)}
                >
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </List>
        </Container>
      </>
    );
  }
}
