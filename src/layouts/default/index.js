import React from 'react'
import { Link } from 'react-router-dom'

import {
  StyledLayout,
  StyledHeader,
  StyledMenu,
  StyledContent,
  StyledBreadcrumb,
  StyledContentWrapper
} from './styles'

function DefaultContainer(props) {
  const { breadcrumb, children } = props
  return (
    <StyledLayout>
      <StyledHeader>
        <Link to="/">
          <img />
        </Link>
        <StyledMenu></StyledMenu>
      </StyledHeader>

      <StyledContent>
        <StyledBreadcrumb>
          {breadcrumb?.map((breadcrumbItem) => {
            return breadcrumbItem.path ? (
              <Link
                key={breadcrumbItem.breadcrumbName}
                to={breadcrumbItem.path}
              >
                <StyledBreadcrumb.Item>
                  {breadcrumbItem.breadcrumbName}
                </StyledBreadcrumb.Item>
              </Link>
            ) : (
              <StyledBreadcrumb.Item key={breadcrumbItem.breadcrumbName}>
                {breadcrumbItem.breadcrumbName}
              </StyledBreadcrumb.Item>
            )
          })}
        </StyledBreadcrumb>

        <StyledContentWrapper>{children}</StyledContentWrapper>
      </StyledContent>
    </StyledLayout>
  )
}

export default DefaultContainer
