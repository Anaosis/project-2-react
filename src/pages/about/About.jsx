import React from 'react';
import Layout from '../../components/layout/Layout';

function About() {
    return(
        <div>
            <Layout>
            <div className="m-5">
                <h1 className="mx-4 mb-5">Despre noi</h1>
                <h3 className="m-4">Vivamus sed libero</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod hendrerit ligula, vel dapibus eros tincidunt vel. Nulla facilisi. Vivamus sed libero eu elit feugiat laoreet. Sed hendrerit accumsan felis a aliquam. Pellentesque erat nisi, lacinia et finibus semper, efficitur ac massa. Proin sed nisl id augue finibus congue. Phasellus quis vehicula nisl. Ut est elit, consequat malesuada lobortis ut, semper eu nunc.
                </p>
                <h3 className="m-4">Quisque accumsan</h3>
                <p>
                    Aliquam a enim a elit bibendum aliquet. Proin a mi eu nisl malesuada congue. Fusce interdum lacus in ante tincidunt, in venenatis libero fermentum. Quisque accumsan lacinia volutpat. Maecenas facilisis, eros sit amet sagittis pellentesque, nisi ante suscipit ex, sed facilisis tellus elit eu enim.
                </p>
                <h3 className="m-4">Ut ullamcorper odio</h3>
                <p>
                    Nunc eget malesuada enim, eget dapibus lectus. Nulla facilisi. Vivamus scelerisque velit et odio rhoncus, ut viverra nisl dignissim. Ut ullamcorper odio ante, sed maximus turpis lacinia ac. Etiam eu imperdiet quam, nec volutpat quam. Suspendisse commodo augue mauris, vitae sagittis turpis tristique eu.
                </p>
            </div>
            </Layout>
        </div>
    );
}

export default About;