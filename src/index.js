import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import ErrorBound from './components/error-bound/errorBound';
import bookStServices from './services/bookstore-services';
import { BookStProvider } from './components/book-sev-context/book-store-context';
import store from './store';

const bookStService = new bookStServices();

ReactDOM.render(
<Provider store={store}>
  <ErrorBound>
    <BookStProvider value={bookStService}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BookStProvider>
  </ErrorBound>
  
</Provider>
,document.getElementById('root'));

