import { ColorListComponent } from 'src/app/color-list/color-list.component';
import { moduleMetadata } from '@storybook/angular';
import { AppModule } from 'src/app/app.module';
import { AppComponent } from 'src/app/app.component';

export default {
  title: 'App',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [AppModule],
    }),
  ],
};

export const App = () => ({
  component: AppComponent,
  props: {
  },
});

App.story = {
  name: 'App (no input)',
};
