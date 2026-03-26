import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './styles/theme.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',
            resumeData: {}
        };
        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);
    }

    getResumeData() {
        $.ajax({
            url: './resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    }

    /** Attach Intersection Observer to drive .reveal animations */
    initScrollReveal() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.12 }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        // Re-observe on data load (elements may appear after AJAX)
        this._scrollObserver = observer;
    }

    componentDidMount() {
        this.getResumeData();
        this.initScrollReveal();
    }

    componentDidUpdate() {
        // Re-scan for newly mounted .reveal elements after data loads
        if (this._scrollObserver) {
            document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
                this._scrollObserver.observe(el);
            });
        }
    }

    componentWillUnmount() {
        if (this._scrollObserver) {
            this._scrollObserver.disconnect();
        }
    }

    render() {
        return (
            <div className="App">
                <Header data={this.state.resumeData.main} />
                <About data={this.state.resumeData.main} />
                <Resume data={this.state.resumeData.resume} />
                <Portfolio data={this.state.resumeData.portfolio} />
                <Footer data={this.state.resumeData.main} />
            </div>
        );
    }
}

export default App;

