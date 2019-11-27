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
            {hasNextPage && !isFetching && (
                <Button onClick={() => loadMoreLists()}>Load More</Button>
            )}
            {isFetching && <div>Loading...</div>}
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
