import React, { Component } from 'react';
import BaseView from '../base/BaseView';
import ListPollViewModel from './ListPollViewModel';
import Header from '../components/Header';
import Footer from '../components/Footer';


export interface ListPollProps {
    listPollViewModel :  ListPollViewModel
    props: any
}

export interface ListPollState {


}

export default class ListPoll extends Component<ListPollProps, ListPollState> implements BaseView {
    private listPollViewModel: ListPollViewModel;

    public constructor(props) {
        super(props);
        const { listPollViewModel } = this.props;
        this.listPollViewModel = listPollViewModel;
    }

    render() {
        return <div>
          <Header />
          <div className="body_center">Center</div>
          <Footer />
        </div>; 
    }

    componentDidMount() {
        this.listPollViewModel.attachView(this);
        this.listPollViewModel.getListPoll();
    }

    componentWillUnmount() {
        this.listPollViewModel.detachView();
    }

    onViewModelChanged(): void {
        throw new Error('Method not implemented.');
    }
}
