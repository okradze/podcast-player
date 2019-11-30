import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
    fetchPodcastLists,
    nextPage,
} from '../../redux/discover/discoverActions'
import {
    selectCurrentPage,
    selectHasNextPage,
    selectIsFetching,
    selectLists,
} from '../../redux/discover/discoverSelectors'
import Button from '../../components/Button/Button'
import PodcastList from '../../components/PodcastList/PodcastList'
import Spinner from '../../components/Spinner/Spinner'

const Discoverpage = ({
    fetchPodcastLists,
    page,
    isFetching,
    hasNextPage,
    lists,
    nextPage,
}) => {
    useEffect(() => {
        fetchPodcastLists(page)
    }, [fetchPodcastLists, page])

    const loadMoreLists = () => {
        nextPage()
    }

    return (
        <div>
            {lists &&
                lists.map(({ id, title, podcasts }) => (
                    <PodcastList key={id} title={title} podcasts={podcasts} />
                ))}
            {isFetching && <Spinner />}
            {hasNextPage && !isFetching && (
                <Button onClick={() => loadMoreLists()}>Load More</Button>
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    page: selectCurrentPage,
    hasNextPage: selectHasNextPage,
    isFetching: selectIsFetching,
    lists: selectLists,
})

const mapDispatchToProps = dispatch => ({
    fetchPodcastLists: page => dispatch(fetchPodcastLists(page)),
    nextPage: () => dispatch(nextPage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Discoverpage)
